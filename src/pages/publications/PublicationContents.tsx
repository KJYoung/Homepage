import styled from "styled-components";
import { Flex, FlexColumnStart, FlexColumnStartEnd, FlexRowCenter, FlexRowEnd, FlexRowSpaceBetween, FlexRowSpaceBetweenEnd, FlexRowStart } from "../../customs/Divs";
import { H2, H5, SPAN } from "../../customs/Spans";
import { PUB1_FIG_URL, PUB2_FIG_URL, PUB2_POSTER_URL, PUB2_SLIDES_URL, PUB3_POSTER_URL, PUB3_REPRESENTATIVE_PIC_V2_URL, PUB3_SLIDES_URL, PUB4_REPRESENTATIVE_PIC_URL } from "../../DATA/Public_URL";
import CustomImageModal from "../../customs/CustomImageModal";
import { NavigateFunction } from "react-router-dom";
import { useRef, useState } from "react";
import { BasicDIV } from "../../customs/Basics";
import { PublicBR } from "../public/Public";
import { TagBubble } from "../../customs/TagBubbleStatic";
import { getSTRRandomHex } from "../../utils/Color";

type TPublicationAuthor = {
    name: string,
    withStar?: boolean,
    url?: string,
    isMe?: boolean,
    isLast?: boolean,
};
type TPublicationContent = {
    id: number,
    title: string,
    author: TPublicationAuthor[],
    status: string,
    status_additional?: string,
    description: string,
    imgURL: string,
    hpURL?: string,
    slideURL?: string,
    posterURL?: string,
    url: string,
    abstract: string,
    frameworkDescription?: string,
    mainResultDescription?: string,
    supResultDescription?: string,
    BibTeX?: string,
    publicationType: (string | string[])[], // string[]인 경우: [{Type 이름}, {TagBubble 색상의 Hex Seed를 결정하는 String}]
};
type TPublicationContents = {
    contents: TPublicationContent[],
};

type TPublicContent = {
    publication : TPublicationContents,
};

export const JunyoungKim: TPublicationAuthor = {
    name: 'Junyoung Kim',
    url: 'https://kjyoung.github.io/Homepage/',
    isMe: true,
};
export const JunyoungKimStar = {
    ...JunyoungKim,
    withStar: true,
};
export const JunwonSeo: TPublicationAuthor = {
    name: 'Junwon Seo',
    url: 'https://junwon.me/',
};
export const JunwonSeoStar: TPublicationAuthor = {
    ...JunwonSeo,
    withStar: true,
};
export const JihongMin: TPublicationAuthor = {
    name: 'Jihong Min',
};
export const SunamCho: TPublicationAuthor = {
    name: 'Sunam Cho',
};

export const UndergradReviewPaperObj: TPublicationContent = {
    id: 1,
    title: 'Analysis of Factors Causing Differences in the Human Hazards of Permetrin',
    author: [JunyoungKim, {...SunamCho, isLast: true}],
    status: 'JEAHT, 2020',
    description: 'We analyzed research papers on the toxicity of permethrin insecticide to point out cautions when utilizing the results of existing toxicity analysis studies.',
    imgURL: PUB1_FIG_URL,
    url: 'https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf',
    abstract: '',
    publicationType: ['Domestic Journal'],
}

export const EvSemMapObj: TPublicationContent = {
    id: 2,
    title: 'Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference',
    author: [JunyoungKimStar, JunwonSeoStar, {...JihongMin, isLast: true}],
    status: 'IROS, 2024',
    status_additional: 'Best Cognitive Papers Finalist',
    description: 'Uncertainty-aware semantic BKI mapping framework for robust deployments in off-road environments using Evidential Deep Learning.',
    imgURL: PUB2_FIG_URL,
    slideURL: PUB2_SLIDES_URL,
    posterURL: PUB2_POSTER_URL,
    hpURL: '/Projects/Evidential-Semantic-Mapping',
    url: 'https://arxiv.org/abs/2403.14138',
    abstract: 'Robotic mapping with Bayesian Kernel Inference (BKI) has shown promise in creating semantic maps by effectively leveraging local spatial information. However, existing semantic mapping methods face challenges in constructing reliable maps in unstructured outdoor scenarios due to unreliable semantic predictions. To address this issue, we propose an evidential semantic mapping, which can enhance reliability in perceptually challenging off-road environments. We integrate Evidential Deep Learning into the semantic segmentation network to obtain the uncertainty estimate of semantic prediction. Subsequently, this semantic uncertainty is incorporated into an uncertainty-aware BKI, tailored to prioritize more confident semantic predictions when accumulating semantic information. By adaptively handling semantic uncertainties, the proposed framework constructs robust representations of the surroundings even in previously unseen environments. Comprehensive experiments across various off-road datasets demonstrate that our framework enhances accuracy and robustness, consistently outperforming existing methods in scenes with high perceptual uncertainties.',
    frameworkDescription: 'Overview pipeline of our uncertainty-aware semantic BKI framework. With an evidential segmentation network trained by EDL, input data is processed to derive continuous semantic probability and uncertainty. These 3D semantic points are then integrated into the semantic map through Bayesian updates using the uncertainty-aware BKI, resulting in a dependable semantic map and variance map in uncertain off-road environments.',
    mainResultDescription: 'Qualitative results of 3D semantic mapping methods. Compared to others, our method generates reliable and accurate maps that preserve semantic details while excluding noisy predictions. In RELLIS-3D, only our method reconstructs grass consistently (First row), and dirt roads and puddles in detail (Second row). In our OffRoad dataset, our method accurately reconstructs the boundaries of unpaved roads, grass, and vegetation, compared to others.',
    supResultDescription: 'Zero-shot semantic mapping results on our OffRoad dataset using a semantic segmentation network pre-trained on RUGD. Our method robustly constructs semantic maps despite prediction uncertainties in unseen environments, whereas other methods struggle to produce clear maps.',
    BibTeX: `@inproceedings{kim2024evidential,
        author={Kim, Junyoung and Seo, Junwon and Min, Jihong},
        booktitle={2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)}, 
        title={Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference}, 
        year={2024},
        pages={1420-1427},
        doi={10.1109/IROS58592.2024.10802766}
}`,
    publicationType: ['Conference', 'Best Cognitive Robotics Papers Finalist'],
};

export const DSTEvSemMapObj: TPublicationContent = {
    id: 3,
    title: 'Uncertainty-aware Semantic Mapping in Off-road Environments with Dempster-Shafer Theory of Evidence',
    author: [JunyoungKim, {...JunwonSeo, isLast: true}],
    status: 'ICRA Workshop, 2024',
    status_additional: 'Spotlight Talk',
    description: 'Fully Evidential Semantic Mapping framework for inherent integration of semantic uncertainty.',
    imgURL: PUB3_REPRESENTATIVE_PIC_V2_URL,
    hpURL: '/Projects/Fully-Evidential-Semantic-Mapping',
    slideURL: PUB3_SLIDES_URL,
    posterURL: PUB3_POSTER_URL,
    url: 'https://arxiv.org/abs/2405.06265',
    abstract: `Semantic mapping with Bayesian Kernel Inference (BKI) has shown promise in providing a richer understanding of environments by effectively leveraging local spatial information. However, existing methods face challenges in constructing accurate semantic maps or reliable uncertainty maps in perceptually challenging environments due to unreliable semantic predictions. To address this issue, we propose an evidential semantic mapping framework, which integrates the evidential reasoning of Dempster-Shafer Theory of Evidence (DST) into the entire mapping pipeline by adopting Evidential Deep Learning (EDL) and Dempster's rule of combination. Additionally, the extended belief is devised to incorporate local spatial information based on their uncertainty during the mapping process. Comprehensive experiments across various off-road datasets demonstrate that our framework enhances the reliability of uncertainty maps, consistently outperforming existing methods in scenes with high perceptual uncertainties while showing semantic accuracy comparable to the best-performing semantic mapping techniques.`,
    frameworkDescription: 'Overview pipeline of our uncertainty-aware semantic BKI framework. With an evidential segmentation network trained by EDL, input data is processed to derive continuous semantic probability and uncertainty. 3D evidential points are then integrated into the semantic map through extended Dempster\'s Combination Rule to enable continuous semantic mapping, resulting in a dependable semantic map and uncertainty map in uncertain off-road environments.',
    mainResultDescription: 'Qualitative results (Semantic Map) of 3D semantic mapping methods. Compared to others, our methods (EBS and Ours) generate accurate maps that preserve semantic details while excluding noisy predictions.',
    supResultDescription: 'Qualitative results (Uncertainty Map) of 3D semantic mapping methods. Compared to others, our method generates the most well-estimated uncertainty values.',
    BibTeX: `@inproceedings{kim2024uncertaintyaware,
        title={Uncertainty-aware Semantic Mapping in Off-road Environments with Dempster-Shafer Theory of Evidence},
        author={Junyoung Kim and Junwon Seo},
        booktitle={ICRA 2024 Workshop on Resilient Off-road Autonomy},
        year={2024},
        url={https://openreview.net/forum?id=FApp8pBo3J}
}`,
    publicationType: ['Workshop', ['Spotlight Talk 4/22 (18%)', 'Spot']],
};

export const GaussianMapObj: TPublicationContent = {
    id: 4,
    title: 'Gaussian Mapping',
    author: [{...JunyoungKim, isLast: true}],
    status: 'In preparation, 2025',
    description: 'In preparation',
    imgURL: PUB4_REPRESENTATIVE_PIC_URL,
    hpURL: '/Projects/Gaussian-Mapping',
    slideURL: '',
    posterURL: '',
    url: '',
    abstract: `In Preparation`,
    frameworkDescription: '',
    mainResultDescription: '',
    supResultDescription: '',
    BibTeX: ``,
    publicationType: ['Preparation'],
};

export const PublicContent: TPublicContent = {
    'publication' : {
        'contents' : [
            GaussianMapObj,
            DSTEvSemMapObj,
            EvSemMapObj,
            UndergradReviewPaperObj,
        ],
    }
};

const PublicationImgBox = styled(FlexRowCenter)`
    width: 250px;
    min-width: 250px;
    max-width: 250px;
    height: 150px;
    min-height: 150px;
    max-height: 150px;
    background-color: white;

    img {
        max-width: 250px;
        max-height: 150px;
        cursor: pointer;
    }
`;

interface IPublicationDiv {
    publicationContent: TPublicationContent, 
    setImage: (src: string, title: string, subtitle: string) => void,
    navigate: NavigateFunction,
    isDetail: boolean,
};

export const PublicationDiv = ({ publicationContent, setImage, navigate, isDetail } : IPublicationDiv) => {
    return <Flex>
        <PublicationImgBox>
            <img src={publicationContent.imgURL} alt={`${publicationContent.title}`} onClick={() => {
                setImage(publicationContent.imgURL, publicationContent.title, publicationContent.description);
            }}/>
        </PublicationImgBox>
        <FlexColumnStart marginLeft="12px" marginTop="10px">
            {/* Title */}
            <H5 marginBottom="6px" className={publicationContent.hpURL && 'clickable'} onClick={() => publicationContent.hpURL && navigate(publicationContent.hpURL)}>{publicationContent.title}</H5>
            <FlexRowSpaceBetween>
                {/* Authors */}
                <FlexRowStart>
                    {publicationContent.author.map((author) => <BasicDIV key={author.name} marginRight="5px">
                        <SPAN fontSize="14px" marginBottom="4px" fontWeight={author.isMe ? '600' : '400'} textDecoration={author.isMe ? 'underline' : 'none'}>
                            {author.name}
                        </SPAN>
                        <SPAN fontSize="14px" marginBottom="4px">
                            {author.withStar ? '*' : ''}{author.isLast ? '' : ', '}
                        </SPAN>
                    </BasicDIV>)}
                    {isDetail && publicationContent.publicationType.map((type, idx) => {
                        if(typeof(type) === typeof(['str'])){
                            return <TagBubble key={idx} color={getSTRRandomHex(type[1])}>{type[0]}</TagBubble>
                        }else{
                            return <TagBubble key={idx} color={getSTRRandomHex(type as string)}>{type}</TagBubble>
                        }
                    })}
                </FlexRowStart>
                {/* Status */}
                <FlexRowEnd width="400px">
                    <FlexColumnStartEnd>
                        <SPAN fontSize="12px" marginBottom="3px">{publicationContent.status}</SPAN>
                        {publicationContent.status_additional && <SPAN fontSize="13px" color="hp-red-darker" fontWeight="600" textAlign="right">{publicationContent.status_additional}</SPAN>}
                    </FlexColumnStartEnd>
                </FlexRowEnd>
            </FlexRowSpaceBetween>
            {/* Short Description */}
            <SPAN fontSize="13px" marginTop="12px">{publicationContent.description}</SPAN>
        </FlexColumnStart>
    </Flex>
}

export const PublicationWrapperDiv = ({ navigate, isDetail } : { navigate : NavigateFunction, isDetail: boolean}) => {
    const [tagModalOpen, setTagModalOpen] = useState(false);
    const TagDetailOnClose = () => {
        setTagModalOpen(false);
    };
    const modalRef = useRef(null);
    const modalAnimRef = useRef(null);
    const [imgSrc, setImgSrc] = useState<string | undefined>();
    const [imgTitle, setImgTitle] = useState<string | undefined>();
    const setImage = (src : string , title : string, subtitle : string) => {
        setImgSrc(src);
        setImgTitle(title);
        setTagModalOpen(true);
    };
    return <FlexColumnStart>
        <FlexRowSpaceBetweenEnd>
            <H2 className="clickable" onClick={() => { navigate('/Projects/'); }}>Publications</H2>
            <SPAN fontSize="13px" className="clickable" onClick={() => { navigate('/Projects/'); }}>(Equal contributions are denoted by *)</SPAN>
        </FlexRowSpaceBetweenEnd>
        <PublicBR />
        {PublicContent['publication']['contents'].map((content) => <PublicationDiv key={content.title} publicationContent={content} setImage={setImage} navigate={navigate} isDetail={isDetail} />)}
        {CustomImageModal({
            isActive: tagModalOpen,
            onClose: TagDetailOnClose,
            modalRef,
            modalAnimRef,
            imgSrc,
            imgTitle,
            imgSubtitle: undefined,
        })}
    </FlexColumnStart>
}