import React from "react";
import { FaFacebook, FaTwitter, FaReddit, FaGithub } from "react-icons/fa";
function Footer() {
	return (
		<>
			<div
				className=' bg-mainblue w-screen h-24 text-bage
            text-xl 
            flex-wrap mt-auto
            flex flex-row items-center justify-around
            '
			>
				<span>Copyrights are reserved &copy;2022</span>
				<ul id='footer-links' className='flex flex-row gap-4  mx-6  '>
					<li>
						<a href='https://www.facebook.com/fighterx938'>
							<FaFacebook />
						</a>
					</li>
					<li>
						<a href='https://twitter.com/A_maher_938'>
							<FaTwitter />
						</a>
					</li>
					<li>
						<a href='https://www.reddit.com/user/ahmedmaher2481998'>
							<FaReddit />
						</a>
					</li>
					<li>
						<a href='https://github.com/ahmedmaher2481998'>
							<FaGithub />
						</a>
					</li>
				</ul>
				<span> Coded by Ahmed Maher</span>
			</div>
		</>
	);
}

export default Footer;
