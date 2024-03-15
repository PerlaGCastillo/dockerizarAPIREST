import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error('missing comment or incorrect')
    } 

    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string =>{
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('missing date or incorrect')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('missing weather or incorrect')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('missing visibility or incorrect')
    }
    return visibilityFromRequest
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param)
}

const isString = (string: string): boolean => {
     return typeof string === 'string'
    //  || string instanceof String
}

const isDate = (date: string): boolean =>{
    return Boolean(Date.parse(date))
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }

    return newEntry
}

export default toNewDiaryEntry