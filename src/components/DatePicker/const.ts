import moment from 'moment'
import suffixIcon from './images/calendar.svg'
import prevIcon from './images/arrow_left.svg'
import nextIcon from './images/arrow_right.svg'
import superPrevIcon from './images/arrow_double_left.svg'
import superNextIcon from './images/arrow_double_right.svg'

// https://github.com/ant-design/ant-design/
// blob/master/components/date-picker/demo/disabled-date.md
export const INFO = {
    suffixIcon,
    prevIcon,
    nextIcon,
    superPrevIcon,
    superNextIcon,
    format: 'DD.MM.YYYY',
    bordered: false,
    placeholder: 'dd.mm.yyyy',
    value: moment(),
}
