import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import cow from '../svg/cow.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import horse from '../svg/horse.svg'

const animalSrcs = { bird, cat, cow, dog, gator, horse };

const AnimalShow = ({ animal }) => {
    return (
        <div>
            <img alt='animal' src={ animalSrcs[animal] } />
        </div>
    )
}

export default AnimalShow;