// dummy data
const data = {
  'en-US': {
    header: 'your header in English'
  },
  'es-ES': {
    header: 'your header in Spanish'
  },
  'ru-RU': {
    header: 'your header in Russian'
  },
  'fr-FR': {
    header: 'your header in French'
  },
  'vi-VN': {
    header: 'your header in Vietnamese'
  },
  'zh-CN': {
    header: 'your header in Chinsese'
  }
}

export const fetchMock = (language: string): any => {
  // tslint:disable-next-line: no-console
  console.log('fetch language: ', language)
  if (!data[language]) {
    // tslint:disable-next-line: no-console
    console.info(`We don't support your language at the moment!.`)
    return
  }

  return new Promise(resolve => resolve(data[language] || data['en-US']))
}
