type RandomNumberProps = {
  value: number
}

type PositiveNumber = RandomNumberProps & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}


type NegativeNumber = RandomNumberProps & {
  isNegative: boolean
  isZero?: never
  isPositive?: never
}

type ZeroNumber = RandomNumberProps & {
  isZero: boolean
  isPositive?: never
  isNegative?: never
}



type RandomProps = PositiveNumber | NegativeNumber | ZeroNumber
const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomProps) => {
  return (
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'} { ' '}
        {isZero && 'zero'}
    </div>
  )
}

export default RandomNumber