import styled from "styled-components";
import { Flex, FlexColumnStart, FlexRowCenter, FlexRowSpaceBetween } from "../../customs/Divs";
import { H2, H5, SPAN } from "../../customs/Spans";
import { PUB1_FIG_URL, PUB2_FIG_URL } from "../../DATA/Public_URL";
import CustomImageModal from "../../customs/CustomImageModal";
import { NavigateFunction } from "react-router-dom";
import { useRef, useState } from "react";
import { BR } from "../../customs/Basics";

type TPublicationAuthor = {
    name: string,
    withStar?: boolean,
    isMe?: boolean,
    isLast?: boolean,
};
type TPublicationContent = {
    title: string,
    author: TPublicationAuthor[],
    status: string,
    description: string,
    imgURL: string,
    url: string,
};
type TPublicationContents = {
    contents: TPublicationContent[],
};

type TPublicContent = {
    publication : TPublicationContents,
};

const JunyoungKim: TPublicationAuthor = {
    name: 'Junyoung Kim',
    isMe: true,
};
const JunyoungKimStar = {
    ...JunyoungKim,
    withStar: true,
};
const JunwonSeo: TPublicationAuthor = {
    name: 'Junwon Seo',
    withStar: true,
};
const JunwonSeoStar: TPublicationAuthor = {
    ...JunwonSeo,
    withStar: true,
};
const JihongMin: TPublicationAuthor = {
    name: 'Jihong Min',
};
const SunamCho: TPublicationAuthor = {
    name: 'Sunam Cho',
};

export const PublicContent: TPublicContent = {
    'publication' : {
        'contents' : [
            {
                title: 'Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference',
                author: [JunyoungKimStar, JunwonSeoStar, {...JihongMin, isLast: true}],
                status: 'Under Review, 2024',
                description: 'Uncertainty-aware semantic BKI mapping framework for robust deployments in off-road environments using Evidential Deep Learning.',
                imgURL: PUB2_FIG_URL,
                url: 'https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf',
            },
            {
                title: 'Analysis of Factors Causing Differences in the Human Hazards of Permetrin',
                author: [JunyoungKim, {...SunamCho, isLast: true}],
                status: 'JEAHT, 2020',
                description: 'We analyzed research papers on the toxicity of permethrin insecticide to point out cautions when utilizing the results of existing toxicity analysis studies.',
                imgURL: PUB1_FIG_URL,
                url: 'https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf',
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
};

export const PublicationDiv = ({ publicationContent, setImage } : IPublicationDiv) => {
    return <Flex>
        <PublicationImgBox>
            <img src={publicationContent.imgURL} alt={`${publicationContent.title}`} onClick={() => {
                setImage(publicationContent.imgURL, publicationContent.title, publicationContent.description);
            }}/>
        </PublicationImgBox>
        <FlexColumnStart marginLeft="12px" marginTop="10px">
            {/* Title */}
            <H5 marginBottom="6px">{publicationContent.title}</H5>
            <FlexRowSpaceBetween>
                {/* Authors */}
                <div>
                    {publicationContent.author.map((author) => <>
                        <SPAN fontSize="14px" marginBottom="4px" fontWeight={author.isMe ? '600' : '400'} textDecoration={author.isMe ? 'underline' : 'none'}>
                            {author.name}
                        </SPAN>
                        <SPAN fontSize="14px" marginBottom="4px">
                            {author.withStar ? '*' : ''}{author.isLast ? '' : ', '}
                        </SPAN>
                    </>)}
                </div>
                {/* <SPAN fontSize="14px" marginBottom="4px">{publicationContent.author.map((author) => <SPAN>`${author.name}${author.withStar ? '*' : ''}`</SPAN>)}</SPAN> */}
                {/* Status */}
                <SPAN fontSize="12px" marginBottom="6px">{publicationContent.status}</SPAN>
            </FlexRowSpaceBetween>
            {/* Short Description */}
            <SPAN fontSize="13px" marginTop="12px">{publicationContent.description}.</SPAN>
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
        <H2 onClick={() => { navigate('/Projects/'); }}>Publication</H2>
        <BR />
        {PublicContent['publication']['contents'].map((content) => <PublicationDiv publicationContent={content} setImage={setImage}/>)}
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