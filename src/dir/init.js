import TryGun from 'trygun'

const trygun = TryGun({gun: {localStorage: false, radisk: true}, url: 'ws://retested.club:10509/announce', hash: '7e6520e2fe505702ec644226ccb0a8bc467c5a2c', trystereo: {jsonParse: false}, debug: true})

export default trygun