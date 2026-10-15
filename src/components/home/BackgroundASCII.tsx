import GradientASCII from '../GradientASCII'


function BackgroundASCII() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black">
        <GradientASCII
            colors={["#84cc16","#e9f7d3","#10b981","#16cc3d"]}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={8}
            density={0.8}
            glyphOpacity={0.85}
            glow={0.2}
            depthOfField={0}
            flicker={0.2}
            softness={0.5}
            scale={1}
            flow={0.5}
            speed={1}
            gradientOpacity={0.9}
            grain={0.08}
            variation={0}
            mouseInteraction
            scrambleRadius={0.1}
            clickEffect="wave"
            intro
            lightMode
        />
    </div>
  )
}

export default BackgroundASCII