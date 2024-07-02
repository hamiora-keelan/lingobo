interface WelcomeMessage {
  language: string
  message: string
}

const welcomeMessages: WelcomeMessage[] = [
  { language: 'English', message: 'Welcome' },
  { language: 'Spanish', message: 'Bienvenido' },
  { language: 'French', message: 'Bienvenue' },
  { language: 'German', message: 'Willkommen' },
  { language: 'Italian', message: 'Benvenuto' },
  { language: 'Chinese', message: '欢迎' },
  { language: 'Japanese', message: 'ようこそ' },
  { language: 'Russian', message: 'Добро пожаловать' },
  { language: 'Arabic', message: 'أهلاً وسهلاً' },
  { language: 'Portuguese', message: 'Bem-vindo' },
]

export default welcomeMessages
