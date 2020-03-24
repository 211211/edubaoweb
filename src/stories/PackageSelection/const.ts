const onPackageClicked = (edubaoPackage: object) => {
  // tslint:disable-next-line: no-console
  console.log({ edubaoPackage })
}

export const INFO = {
  title: 'Our packages are tailored to your needs.',
  description: `Let us know why you’re going to Germany,
   so we can show you the packages that match your situation best.`,
  situations: [
    'Studienkolleg',
    'Student',
    'Au-pair',
    'Work',
    'Exchange Student',
    'Vocational Training',
  ],
  selectedSituation: '',
  onClick: onPackageClicked
}
