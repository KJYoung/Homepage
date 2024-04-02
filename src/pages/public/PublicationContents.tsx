import styled from "styled-components";
import { Flex, FlexColumnStart, FlexRowCenter, FlexRowEnd, FlexRowSpaceBetween, FlexRowSpaceBetweenEnd, FlexRowStart } from "../../customs/Divs";
import { H2, H5, SPAN } from "../../customs/Spans";
import { PUB1_FIG_URL, PUB2_FIG_URL } from "../../DATA/Public_URL";
import CustomImageModal from "../../customs/CustomImageModal";
import { NavigateFunction } from "react-router-dom";
import { useRef, useState } from "react";
import { BasicDIV } from "../../customs/Basics";
import { PublicBR } from "./Public";

type TPublicationAuthor = {
    name: string,
    withStar?: boolean,
    url?: string,
    isMe?: boolean,
    isLast?: boolean,
};
type TPublicationContent = {
    title: string,
    author: TPublicationAuthor[],
    status: string,
    description: string,
    imgURL: string,
    hpURL?: string,
    url: string,
    abstract: string,
    frameworkDescription?: string,
    mainResultDescription?: string,
    supResultDescription?: string,
    BibTeX?: string,
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
    withStar: true,
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

export const EvSemMapObj: TPublicationContent = {
    title: 'Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference',
    author: [JunyoungKimStar, JunwonSeoStar, {...JihongMin, isLast: true}],
    status: 'Under Review, 2024',
    description: 'Uncertainty-aware semantic BKI mapping framework for robust deployments in off-road environments using Evidential Deep Learning.',
    imgURL: PUB2_FIG_URL,
    hpURL: '/Projects/Evidential-Semantic-Mapping',
    url: 'https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf',
    abstract: 'Robotic mapping with Bayesian Kernel Inference (BKI) has shown promise in creating semantic maps by effectively leveraging local spatial information. However, existing semantic mapping methods face challenges in constructing reliable maps in unstructured outdoor scenarios due to unreliable semantic predictions. To address this issue, we propose an evidential semantic mapping, which can enhance reliability in perceptually challenging off-road environments. We integrate Evidential Deep Learning into the semantic segmentation network to obtain the uncertainty estimate of semantic prediction. Subsequently, this semantic uncertainty is incorporated into an uncertainty-aware BKI, tailored to prioritize more confident semantic predictions when accumulating semantic information. By adaptively handling semantic uncertainties, the proposed framework constructs robust representations of the surroundings even in previously unseen environments. Comprehensive experiments across various off-road datasets demonstrate that our framework enhances accuracy and robustness, consistently outperforming existing methods in scenes with high perceptual uncertainties.',
    frameworkDescription: 'Overview pipeline of our uncertainty-aware semantic BKI framework. With an evidential segmentation network trained by EDL, input data is processed to derive continuous semantic probability and uncertainty. These 3D semantic points are then integrated into the semantic map through Bayesian updates using the uncertainty-aware BKI, resulting in a dependable semantic map and variance map in uncertain off-road environments.',
    mainResultDescription: 'Qualitative results of 3D semantic mapping methods. Compared to others, our method generates reliable and accurate maps that preserve semantic details while excluding noisy predictions. In RELLIS-3D, only our method reconstructs grass consistently (First row), and dirt roads and puddles in detail (Second row). In our OffRoad dataset, our method accurately reconstructs the boundaries of unpaved roads, grass, and vegetation, compared to others.',
    supResultDescription: 'Zero-shot semantic mapping results on our OffRoad dataset using a semantic segmentation network pre-trained on RUGD. Our method robustly constructs semantic maps despite prediction uncertainties in unseen environments, whereas other methods struggle to produce clear maps.',
    BibTeX: `@article{kim2024evidential, 
        title={Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference},
        author={Kim, Junyoung and Seo, Junwon and Min, Jihong},
        journal={arXiv preprint arXiv:2403.14138},
        year={2024}
}`,
};

export const PublicContent: TPublicContent = {
    'publication' : {
        'contents' : [
            EvSemMapObj,
            {
                title: 'Analysis of Factors Causing Differences in the Human Hazards of Permetrin',
                author: [JunyoungKim, {...SunamCho, isLast: true}],
                status: 'JEAHT, 2020',
                description: 'We analyzed research papers on the toxicity of permethrin insecticide to point out cautions when utilizing the results of existing toxicity analysis studies.',
                imgURL: PUB1_FIG_URL,
                url: 'https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf',
                abstract: '',
            },
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
};

export const PublicationDiv = ({ publicationContent, setImage, navigate } : IPublicationDiv) => {
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
                </FlexRowStart>
                {/* Status */}
                <FlexRowEnd>
                    <SPAN fontSize="12px" marginBottom="6px">{publicationContent.status}</SPAN>
                </FlexRowEnd>
            </FlexRowSpaceBetween>
            {/* Short Description */}
            <SPAN fontSize="13px" marginTop="12px">{publicationContent.description}</SPAN>
        </FlexColumnStart>
    </Flex>
}

export const PublicationWrapperDiv = ({ navigate } : { navigate : NavigateFunction}) => {
    const [tagModalOpen, setTagModalOpen] = useState(false);
    const TagDetailOnClose = () => {
        setTagModalOpen(false);
    };
    const modalRef = useRef(null);
    const modalAnimRef = useRef(null);
    const [imgSrc, setImgSrc] = useState<string | undefined>();
    const [imgTitle, setImgTitle] = useState<string | undefined>();
    const [imgSubtitle, setImgSubtitle] = useState<string | undefined>();
    const setImage = (src : string , title : string, subtitle : string) => {
        setImgSrc(src);
        setImgTitle(title);
        setImgSubtitle(subtitle);
        setTagModalOpen(true);
    };
    return <FlexColumnStart>
        <FlexRowSpaceBetweenEnd>
            <H2 className="clickable" onClick={() => { navigate('/Projects/'); }}>Publications</H2>
            <SPAN fontSize="13px" className="clickable" onClick={() => { navigate('/Projects/'); }}>(Equal contributions are denoted by *)</SPAN>
        </FlexRowSpaceBetweenEnd>
        <PublicBR />
        {PublicContent['publication']['contents'].map((content) => <PublicationDiv key={content.title} publicationContent={content} setImage={setImage} navigate={navigate}/>)}
        {CustomImageModal({
            isActive: tagModalOpen,
            onClose: TagDetailOnClose,
            modalRef,
            modalAnimRef,
            imgSrc,
            imgTitle,
            imgSubtitle,
        })}
    </FlexColumnStart>
}