export const contents = state => {
  // console.log(state)
  for (var i = 0; i < state.contents.length; i++) {
    if (state.contents[i].id.toString() === state.choicelang.toString()) {
      return state.contents[i]
    }
  }
}
export const lang = state => {
  return state.choicelang
}
