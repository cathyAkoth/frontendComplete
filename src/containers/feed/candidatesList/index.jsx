import './candidatesList.css';
import Candidate from '../candidate/Candidate';
import { Candidates } from '../../../dummyData';

export default function CandidatesList() {
    return (
        <div className='mkz__candidates-list'>
            {
                Candidates.map((c) => (
                    <Candidate key={c.id} candidate={c} />
                ))
            }
        </div>
    )
}
