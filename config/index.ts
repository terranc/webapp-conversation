import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'OKX交易知识助手',
  description: '',
  copyright: 'PinMe',
  privacy_policy: '',
  default_language: 'zh-Hant',
}

export const isShowPrompt = true
export const promptTemplate = '你好，我是OKX知识库助手， 您可以问题任何关于加密货币交易相关的问题哦～'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
