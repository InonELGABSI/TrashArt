type VerticalCarProps = {
	images: string[];
	/** Animation duration in seconds */
	speed?: number;
};

const duplicate = (items: string[]) => {
	if (items.length === 0) {
		return [];
	}
	
	// Ensure we have enough items to cover the height before duplicating for the loop
	// 3 items * ~300px = 900px, which is > 520px container height
	let baseItems = [...items];
	while (baseItems.length < 3) {
		baseItems = [...baseItems, ...items];
	}
	
	return [...baseItems, ...baseItems];
};

export const VerticalCar = ({ images, speed = 20 }: VerticalCarProps) => {
	if (!images || images.length === 0) {
		return null;
	}

	const columnOne = images.filter((_, idx) => idx % 2 === 0);
	const columnTwo = images.filter((_, idx) => idx % 2 !== 0);

	const col1Items = duplicate(columnOne.length ? columnOne : images);
	const col2Items = duplicate(columnTwo.length ? columnTwo : images);
	const animationDuration = `${speed}s`;

	return (
		<div className="vertical-carousel">
			<div className="vertical-carousel__mask">
				<div className="vertical-carousel__columns">
					<div
						className="vertical-carousel__column"
						style={{ animationDuration }}
					>
						{col1Items.map((src, index) => (
							<div className="vertical-carousel__item" key={`col1-${index}-${src}`}>
								<img src={src} alt={`Creative recycle ${index + 1}`} />
							</div>
						))}
					</div>
					<div
						className="vertical-carousel__column vertical-carousel__column--reverse"
						style={{ animationDuration }}
					>
						{col2Items.map((src, index) => (
							<div className="vertical-carousel__item" key={`col2-${index}-${src}`}>
								<img src={src} alt={`Community artwork ${index + 1}`} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
