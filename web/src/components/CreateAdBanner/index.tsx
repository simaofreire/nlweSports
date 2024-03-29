import { MagnifyingGlassPlus } from 'phosphor-react';

interface AdsModalProps {
	openAdsModal: boolean;
	setOpenAdsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateAdBanner = ({ openAdsModal, setOpenAdsModal }: AdsModalProps) => {
	return (
		<div className="pt-2 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
			<div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center md:flex-col">
				<div>
					<strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
					<span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
				</div>
				<button
					className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3 md:mt-4"
					onClick={() => setOpenAdsModal(!openAdsModal)}
				>
					<MagnifyingGlassPlus />
					Publicar anúncio
				</button>
			</div>
		</div>
	);
};

export default CreateAdBanner;
