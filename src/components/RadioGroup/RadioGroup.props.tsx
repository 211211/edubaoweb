import {IRadio} from '../Radio/Radio.props'

export interface IRadioGroup {
    selectedValue: string | number
    onChange?: any
    options: IRadio[]
    direction?: 'row' | 'column'
}
