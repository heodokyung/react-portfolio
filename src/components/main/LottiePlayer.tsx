import Lottie from 'react-lottie-player';
const LottiePlayer = ({ lotteData }: any) => {
	return (
		<>
			<Lottie
				loop
				animationData={lotteData}
				play
				style={{ width: '100%', height: 300, background: 'transparent' }}
			/>
		</>
	);
};

export default LottiePlayer;
