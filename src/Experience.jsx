import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";
export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />
      <color args={["#5D369B"]} attach="background" />
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#fb0290"}
            rotation={[-0.1, Math.PI, 0]}
            position={[-0.5, 0.55, -1.65]}
          />
          <primitive
            object={computer.scene}
            position-y={-1.2}
            position-x={-0.5}
            position-z={-0.5}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://abdallahzaher2022-8nv6.vercel.app/" />
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.8}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            ABDALLAH ZAHER ABUSEDO
          </Text>
          {/* <Text> </Text>
          <Text>(Posidoon) </Text> */}
        </Float>
      </PresentationControls>
    </>
  );
}
