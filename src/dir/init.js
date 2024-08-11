import TryGun from 'trygun'

const trygun = TryGun({gun: {localStorage: false, radisk: true}, url: 'ws://retested.club:10509/announce', hash: '7e6520e2fe505702ec644226ccb0a8bc467c5a2c', trystereo: {max: 1, min: 1, jsonParse: false}, debug: true})

const user = trygun.user()

export {trygun, user}