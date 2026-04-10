import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Hero = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API}/github/profile`);
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-[#a3a3a3]">Loading...</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <div className="mb-6 flex items-center gap-6">
          {profile?.avatar_url && (
            <img
              src={profile.avatar_url}
              alt={profile.name}
              className="w-20 h-20 rounded-full border-2 border-[#2d2d2d]"
            />
          )}
          <div className="inline-block px-4 py-2 bg-[#1f1f1f] border border-[#2d2d2d] rounded-full">
            <span className="text-[#a3a3a3] text-sm">QA Engineer & Jr Mobile Developer</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {profile?.name || 'Süleyman Yiğit'}
        </h1>

        <p className="text-xl md:text-2xl text-[#a3a3a3] mb-8 max-w-2xl leading-relaxed">
          {profile?.bio || 'Building quality software through rigorous testing and elegant mobile solutions. Passionate about automation, clean code, and exceptional user experiences.'}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-[#e5e5e5] border-white transition-colors duration-200"
            onClick={() => window.open(profile?.html_url || 'https://github.com/YigitSezenn', '_blank')}
          >
            <Github className="mr-2" size={20} />
            View GitHub
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-white border-[#2d2d2d] hover:border-white hover:bg-[#1f1f1f] transition-all duration-200"
            onClick={() => window.open('https://www.linkedin.com/in/suleymanyigit', '_blank')}
          >
            <Linkedin className="mr-2" size={20} />
            LinkedIn
          </Button>
          {profile?.email && (
            <Button
              variant="outline"
              className="bg-transparent text-white border-[#2d2d2d] hover:border-white hover:bg-[#1f1f1f] transition-all duration-200"
              onClick={() => window.location.href = `mailto:${profile.email}`}
            >
              <Mail className="mr-2" size={20} />
              Email
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-8 text-[#a3a3a3]">
          <div>
            <div className="text-3xl font-bold text-white mb-1">{profile?.public_repos || 0}</div>
            <div className="text-sm">Public Repositories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">{profile?.followers || 0}</div>
            <div className="text-sm">GitHub Followers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">5+</div>
            <div className="text-sm">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
