// sizes.ts
type Sizes = 'md' | 'lg' | 'xl'
type SizeTuple = [number, number, number, number]

type SizeConfig = {
	[key in Sizes]: SizeTuple
}

function sizeConfigToTailwind(sizeConfig: SizeConfig) {
	return Object.entries(sizeConfig)
		.reduce((acc, [size, sizeTuple]) => {
			const [rowStart, rowSpan, colStart, colSpan] = sizeTuple
			acc.push(
				`${size}:col-start-${colStart} ${size}:col-span-${colSpan} ${size}:row-start-${rowStart} ${size}:row-span-${rowSpan}`
			)
			return acc
		}, [] as string[])
		.join(' ')
}
