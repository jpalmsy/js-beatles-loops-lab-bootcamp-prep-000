function theBeatlesPlay(musicians, instruments) {
  const arr = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts) {
  const facts = []
  function maybeTrue() {
  return Math.random() >= 0.5
  while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}