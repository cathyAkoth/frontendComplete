import './miniCard.css';
import { Search } from '@material-ui/icons';

export default function MiniCard() {
  return (
    <div className='mkz__mini-card'>
        <div className='mkz__mini-card-image'>
            <Search />
        </div>
        <div className='mkz__mini-card-text'>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
    </div>
    
  )
}
