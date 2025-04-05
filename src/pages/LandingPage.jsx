import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
    <>
        <div className="bg-dark-green">please work</div>
        <button
        type="button"
        className="btn hover:text-amber-200"
        onClick={() => navigate('/farmdashboard')}
      >
        My Farm
      </button>
    </>
    )
}