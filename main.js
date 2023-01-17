// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, array) => {
  return {
  spcimenNum: num,
  dna: array,
  mutate() {
    console.log('Mutated DNA')
    const newBase = returnRandBase() 
    const randomIndex = Math.floor(Math.random() * this.dna.length)
    this.dna.splice(randomIndex, 1, newBase)
    return this.dna
  },
  compareDNA(dna2) {
    let count = 0
    for (let i=0; i<this.dna.length; i++) {
      const dnaOne = this.dna[i]
      const dnaTwo = dna2.dna[i]
      if (dnaOne===dnaTwo){
        count++
      }
    }
    const match = count * 100 / 15
    return `The two specimens share ${match.toFixed(1)}% of their DNA in common.`
  },
  willLikelySurvive() {
    let count = 0
    for (let i = 0; i < this.dna.length; i++){
      if (this.dna[i] === 'C' || 'G') {
        count++
      }
    }
    if (count*100/15 > 60){
      return true
    }
    else {
      return false
    }
  }
  }
}
// let subj1 = pAequorFactory(1,mockUpStrand())
// let subj2 = pAequorFactory(2,mockUpStrand())
// console.log(subj1)
// console.log(subj1.mutate())
// console.log((subj1.compareDNA(subj2)))
// console.log(subj1.willLikelySurvive())

let species =[]
for (let i=1; i<31; i++){
  species.push(pAequorFactory(i,mockUpStrand))
}
console.log(species)



