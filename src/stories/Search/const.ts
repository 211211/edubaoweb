const onClick = (str: string) => {
  // tslint:disable-next-line: no-console
  console.log({ str })
}

const onChange = (e: any) => {
  // tslint:disable-next-line: no-console
  console.log({ value: e.target.value })
}

export const INFO = {
  headline: 'Search',
  value: '',
  onChange,
  placeholder: `Type in what you're looking for...`,
  buttonText: 'Go',
  onClick,
}
