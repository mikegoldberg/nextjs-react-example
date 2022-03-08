const networkRleationData = {
    inExtendedNetwork: true
}

export default function NetworkRelation() {
    const networkRelation = networkRleationData.inExtendedNetwork ? 'extended' : '';

    return (
        <div class="card mb-3">
            {`Tom is in your ${networkRelation} network`}
        </div>
    );
}
