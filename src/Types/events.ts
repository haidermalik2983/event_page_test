export interface EventType {
    id:number
    imageSrc: string, 
    numberOfPlayers: number, 
    eventHeading: string, 
    eventCity: string , 
    eventCountry: string, 
    eventState: string, 
    eventStart: string, 
    eventEnd:string, 
    eventYear: number
    distance: number
}

export interface SelectOptionsType {
    label: string, 
    value: string | number
}