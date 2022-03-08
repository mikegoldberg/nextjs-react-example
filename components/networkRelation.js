const networkRleationData = {
    inExtendedNetwork: true
}

export default function NetworkRelation() {
    const networkRelation = networkRleationData.inExtendedNetwork ? 'extended' : '';

    return (
        <div class="network-relation">
            {`Tom is in your ${networkRelation} network`}
        </div>
    );
}
