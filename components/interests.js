const interestsData = {
    general: ['Skiing', 'Biking', 'Internet', 'Food', 'Sleep', 'TV', 'Prehistoric Archaeology']
}

export default function Interests() {
    return (
        <div class="container">
            <h5 class="card-title">Tom's Interests</h5>
            <div class="col">
                <div class="row">
                    <div class="col">
                        {'General'}
                    </div>
                    <div class="col">
                        {interestsData.general.join(', ')}
                    </div>
                </div>
            </div>
        </div>
    );
}
