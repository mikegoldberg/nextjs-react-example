import Link from "next/link";

export default function Contact() {
    return (
        <div class="container">
            <h5 class="card-title">Contacting Tom</h5>
            <div class="row">
                <div class="col">
                    <ul class="list-group-flush">
                        <li class="list-group-item">
                            <Link href="#">
                                <a className="nav-link sm" role="button">
                                    {'Send Message'}
                                </a>
                            </Link>
                        </li>
                        <li class="list-group-item">
                            <Link href="#">
                                <a className="nav-link sm" role="button">
                                    {'Add to Friends'}
                                </a>
                            </Link>
                        </li>
                        <li class="list-group-item">
                            <Link href="#">
                                <a className="nav-link sm" role="button">
                                    {'Instant Message'}
                                </a>
                            </Link>
                        </li>
                        <li class="list-group-item">
                            <Link href="#">
                                <a className="nav-link sm" role="button">
                                    {'Add to Group'}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <ul class="list-group-flush">
                        <li class="list-group-item">
                            <Link href="#">
                                <a className="nav-link sm" role="button">
                                    {'Forward to Friend'}
                                </a>
                            </Link>
                        </li>
                        <li class="list-group-item">
                            <Link href="#">
                                <a className="nav-link sm" role="button">
                                    {'Add to Favorites'}
                                </a>
                            </Link>
                        </li>
                        <li class="list-group-item">
                            <Link href="#">
                                <a className="nav-link sm" role="button">
                                    {'Block User'}
                                </a>
                            </Link>
                        </li>
                        <li class="list-group-item">
                            <Link href="#">
                                <a className="nav-link sm" role="button">
                                    {'Rank User'}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
