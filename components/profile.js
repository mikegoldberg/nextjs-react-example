const profileData = {
    name: 'Tom',
    quote: ':-)',
    sex: 'Male',
    age: 30,
    location: {
        city: 'Santa Monica',
        state: 'CALIFORNIA',
        country: 'United States'
    },
    lastLogin: '4/22/2006'
};

export default function Profile() {
    return (
        <div class="card mb-3">
            <div class="row g-0">
                <h2 class="card-title">{profileData.name}</h2>
                <div class="col-md-4">
                    <img src="/hamburglar.png" class="img-fluid rounded-start" alt="hamburglar" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <ul class="list-group-flush">
                            <li class="list-group-item">{`"${profileData.quote}"`}</li>
                            <li class="list-group-item">{profileData.sex}</li>
                            <li class="list-group-item">{profileData.age}</li>
                            <li class="list-group-item">{profileData.location.city}</li>
                            <li class="list-group-item">{profileData.location.state}</li>
                            <li class="list-group-item">{profileData.location.country}</li>
                        </ul>
                        <p class="card-text"><small class="text-muted">Last login: {profileData.lastLogin}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
