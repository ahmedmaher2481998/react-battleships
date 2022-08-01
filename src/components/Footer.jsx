import React from "react";
import { FaFacebook, FaTwitter, FaReddit, FaGithub } from "react-icons/fa";
function Footer() {
	return (
		<>
			<div
				id='footer'
				className=' bg-mainblue w-[100vw]  text-bage selection:text-xl flex flex-wrap 
				flex-row items-center justify-center'
			>
				<div className='h-24 p-2 gap-6 max-w-[80%] flex flex-wrap flex-row items-center justify-between'>
					<span>Copyrights are reserved &copy;2022</span>
					<ul id='footer-links' className='flex  gap-6 flex-row '>
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
			</div>
		</>
	);
}

export default Footer;
