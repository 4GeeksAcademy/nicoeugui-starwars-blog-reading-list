import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const removeFromFavorites = (uid) => {
		actions.removeFromFavorites(uid);
	};

	return (
		<nav className="navbar navbar-expand-lg bg-light border-body" data-bs-theme="light">
			<div className="container-fluid">
				<Link to={"/"}>
					<a className="navbar-brand">
						<img src="https://media.discordapp.net/attachments/1154140630914699355/1180292333082787930/star-wars-logo-png-transparent.png?ex=657ce3e4&is=656a6ee4&hm=274e0e1f10385b39f8c4afe656a30cb0e11c3633e9c378d85ad12254255fd583&=&format=webp&quality=lossless&width=683&height=683" alt="..." height="70" />
					</a>
				</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<Dropdown>
							<Dropdown.Toggle variant="primary" id="dropdown-favorites">
								Favoritos <span className="badge text-bg-light">{store.favorites.length}</span>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{store.favorites.map((favorite) => (
									<Dropdown.Item key={favorite.uid}>
										{favorite.name}
										<i class="fa-solid fa-trash ms-3" onClick={() => removeFromFavorites(favorite.uid)}></i>
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>
					</ul>
				</div>
			</div>
		</nav>
	);
};
