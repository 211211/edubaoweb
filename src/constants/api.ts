import { get } from 'helpers'

const buildCommonHeader = (lang: string) => {
    return {
        'X-Languages': lang,
        'X-Flatten': 'true'
    }
}

export const getTodoCategories = (lang: string) =>
    get('/content/edubao/studyguide-todo-category/', buildCommonHeader(lang))

export const getTodos = (lang: string) =>
    get('/content/edubao/studyguide-todos-todo/', buildCommonHeader(lang))

export const getArticles = (lang: string) =>
    get('/content/edubao/studyguide-articles-article/', buildCommonHeader(lang))

export const getArticleByID = (lang: string, id: string) => {
    const url = '/content/edubao/studyguide-articles-article/{{id}}'
    return get(url.replace('{{id}}', id || 'c67e74ed-bdff-40aa-9ce7-f47463be5a87'), buildCommonHeader(lang))
}

export const getCategories = (lang: string) =>
    get('/content/edubao/studyguide-articles-category/',
        buildCommonHeader(lang))

export const getSubCategories = (lang: string) =>
    get('/content/edubao/studyguide-articles-subcategory/',
        buildCommonHeader(lang))

export const getPackageServices = (lang: string) =>
    get('/content/edubao/service-details/', buildCommonHeader(lang))

export const getPackages = (lang: string) =>
    get('/content/edubao/package/', buildCommonHeader(lang))

export const getPackageGroups = (lang: string) =>
    get('/content/edubao/package-group/', buildCommonHeader(lang))

export const getPricingInformation = (lang: string) =>
    get('/content/edubao/pricing-information/', buildCommonHeader(lang))
