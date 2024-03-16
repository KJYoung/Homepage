type TPublicationContent = {
    title: string,
    url: string,
};
type TPublicationContents = {
    contents: TPublicationContent[],
};

type TPublicContent = {
    publication : TPublicationContents,
}

export const PublicContent: TPublicContent = {
    'publication' : {
        'contents' : [
            {
                title: '2020. Analysis of Factors Causing Differences in the Human Hazards of Permetrin',
                url: 'https://www.jeaht.org/upload/pdf/jeaht-23-4-171.pdf',
            },
        ],
    }
}