
6:18 a. m.
Guía: texturas de ambientCG en R3F + WebGPU
Parte 1 — Qué hacer con la carpeta Ground086_1K-JPG
Regla mental: solo te sirven los .jpg. Todo lo demás es para otros programas, bórralo o ignóralo.

Archivo	¿Usar?	Para qué
Ground086_1K-JPG_Color.jpg	✅ SÍ	Albedo / color base → prop map
Ground086_1K-JPG_NormalGL.jpg	✅ SÍ	Relieve de superficie → prop normalMap
Ground086_1K-JPG_Roughness.jpg	✅ SÍ	Rugosidad → prop roughnessMap
Ground086_1K-JPG_AmbientOcclusion.jpg	⚠️ Opcional	Sombras de contacto → prop aoMap (necesita uv2; en terreno plano aporta poco)
Ground086_1K-JPG_Displacement.jpg	⚠️ Opcional	Desplazamiento real de geometría. No lo uses aquí: tu relieve grande viene del heightmap global, no de esta textura
Ground086_1K-JPG_NormalDX.jpg	❌ NO	Normal en convención DirectX. Te ilumina al revés. Usa el GL siempre
Ground086.png	❌ NO	Es el thumbnail/preview de la esfera que viste
Ground086_1K-JPG.blend	❌ NO	Proyecto de Blender
Ground086_1K-JPG.mtlx	❌ NO	MaterialX
Ground086_1K-JPG.tres	❌ NO	Material de Godot
Ground086_1K-JPG.usdc	❌ NO	Universal Scene Description
Acción: crea public/textures/ground/ y copia ahí solo los 3-4 jpg que marqué SÍ. Renómbralos corto si quieres (color.jpg, normal.jpg, rough.jpg). El NormalDX es la trampa #1: parece igual al GL pero tiene el canal verde invertido.

Parte 2 — Lo que cambia en WebGPU (vs lo que verás en tutoriales de WebGL)
Casi todos los tutoriales que encuentres son WebGL. Estas son las 4 diferencias reales que debes aplicar:

Imports desde otra raíz. import * as THREE from 'three/webgpu' en vez de 'three', y TSL aparte: import { ... } from 'three/tsl'. 
Zabbix
Renderer async en el prop gl. R3F soporta WebGPU vía el factory async del prop gl: pasas una función async que crea e inicializa un WebGPURenderer; el prop gl debe devolver una Promise que resuelve al renderer. 
Utsubo
El material lleva "Node". Con WebGPU necesitas materiales compatibles con TSL; mismos nombres que antes pero con "Node" antes de "Material" (MeshStandardNodeMaterial). Para usarlos declarativamente en R3F hay que extenderlos con extend(). 
Wawasensei
Shaders en TSL, nunca GLSL. El código GLSL no corre en WebGPU; usa TSL. TSL es renderer-agnostic: su salida sirve para WebGL y WebGPU. Olvídate de onBeforeCompile y de librerías tipo CSM: eso es la vía WebGL. 
Utsubo
Loopspeed
Lo que NO cambia y te sirve tal cual de cualquier tutorial: useTexture, el tiling con RepeatWrapping, y los nombres de las props (map, normalMap, roughnessMap).

Parte 3 — Una textura sola (haz esto PRIMERO)
No saltes al splatmap hasta ver esto renderizando bien.

jsx
// App.jsx — setup del canvas WebGPU
import * as THREE from 'three/webgpu'
import { Canvas, extend } from '@react-three/fiber'

extend(THREE) // registra MeshStandardNodeMaterial y demás

export default function App() {
  return (
    <Canvas
      gl={async (props) => {
        const renderer = new THREE.WebGPURenderer(props)
        await renderer.init()
        return renderer
      }}
    >
      {/* luces + <Ground /> */}
    </Canvas>
  )
}
jsx
// Ground.jsx
import * as THREE from 'three/webgpu'
import { useTexture } from '@react-three/drei'

export function Ground() {
  const [color, normal, rough] = useTexture([
    '/textures/ground/color.jpg',
    '/textures/ground/normal.jpg',   // el NormalGL
    '/textures/ground/rough.jpg',
  ])

  ;[color, normal, rough].forEach((t) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.repeat.set(30, 30) // tilea 30x → mata el look borroso/estirado
  })

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 256, 256]} />
      <meshStandardNodeMaterial map={color} normalMap={normal} roughnessMap={rough} />
    </mesh>
  )
}
Con material built-in, el sRGB del color lo maneja Three solo. En R3F v9 se eliminó la conversión sRGB automática de props; las texturas de color se manejan automáticamente para los materiales integrados. 
Poimandres

Parte 4 — El splatmap (varias texturas por zona)
Aquí entra TSL. La idea: tomas el meshStandardNodeMaterial (que ya trae luces y sombras) y le sobreescribes solo el nodo de color con tu mezcla. Puedes utilizar las capacidades base del material de nodos (iluminación, sombras, etc.) mientras sobrescribes el nodo de color con lógica custom. 
Loopspeed

Una advertencia que es obligatoria para no romper nada: cuando construyes el color en un shader custom, el sRGB ya no es automático. Para materiales o shaders personalizados, anota las texturas de color con texture.colorSpace = THREE.SRGBColorSpace. Es decir: a las texturas de color les pones colorSpace = SRGBColorSpace; a normal/rough/AO las dejas en lineal (por defecto). Mezclarlas mal aquí es lo que corrompe los normals. 
Poimandres

El mezclado puede ser por splatmap pintado a mano (una imagen RGBA donde cada canal pesa una textura) o automático por pendiente/altura leídas de la geometría — que es lo que hace que se vea dinámico sin pintar nada.