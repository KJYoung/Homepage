export const D_Day_Calculator = (year: number, _month: number, day: number) => {
    const MS_TO_DAY = 1000 * 60 * 60 * 24;
    const _today = new Date();
    const today = new Date(_today.getFullYear(), _today.getMonth(), _today.getDate());
    const month = _month - 1;
    
    const target = new Date(year, month, day);
    if( today < target ){
        const result = Math.ceil( ( target.getTime() - today.getTime() ) / MS_TO_DAY );
        return `[D-Day : ${result}]`;
    } else {
        const result = Math.ceil( ( today.getTime() - target.getTime() ) / MS_TO_DAY );
        return `[${result} Days Before]`;
    }
};
export const Reverse_D_Day_Calculator = (year: number, _month: number, day: number) => {
    // Assume : Today < [yy,_m_m, dd]
    const MS_TO_DAY = 1000 * 60 * 60 * 24;
    const _today = new Date();
    const today = new Date(_today.getFullYear(), _today.getMonth(), _today.getDate());
    const month = _month - 1;
    
    const target = new Date(year, month, day);
    const result = Math.ceil( ( target.getTime() - today.getTime() ) / MS_TO_DAY );
    today.setDate(today.getDate()-result);
    return today.toDateString();
};
export const D_Day_Percent_Calculator = (year: number, _month: number, day: number) => {
    const MS_TO_DAY = 1000 * 60 * 60 * 24;
    const _today = new Date();
    const today = new Date(_today.getFullYear(), _today.getMonth(), _today.getDate());
    const month = _month - 1;
    
    const target = new Date(year, month, day);
    if( today < target ){
        const result = Math.ceil( ( target.getTime() - today.getTime() ) / MS_TO_DAY );
        return `${(1095 - result) / 1095 * 100}%`;
    } else {
        return `100%`;
    }
};