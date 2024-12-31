import { useState, useEffect } from 'react';
import { Lock, Trash2, ChevronDown, ChevronUp, LogOut } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

export function Updates() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('admin_status') === 'true');
  const [token, setToken] = useState('');
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(true);

  useEffect(() => {
    localStorage.setItem('admin_status', isAdmin.toString());
  }, [isAdmin]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token === import.meta.env.VITE_ADMIN_TOKEN) {
      setIsAdmin(true);
      setShowTokenInput(false);
    } else {
      alert('Invalid token');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: BlogPost = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      date: new Date().toLocaleDateString()
    };
    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '' });
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="min-h-screen pt-24 relative">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">Project Updates</h1>
        
        {/* Admin Access */}
        <div className="text-center mb-8">
          {!isAdmin && (
            <button 
              onClick={() => setShowTokenInput(!showTokenInput)}
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              <Lock className="w-4 h-4" />
              Admin Access
            </button>
          )}
        </div>

        {/* Token Input with Animation */}
        <div className={`max-w-md mx-auto mb-8 transition-all duration-300 ease-in-out transform ${
          showTokenInput ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          {showTokenInput && !isAdmin && (
            <form onSubmit={handleTokenSubmit} className="flex gap-2">
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter admin token"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Admin Panel */}
        {isAdmin && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-xl cursor-pointer"
                 onClick={() => setShowAdminPanel(!showAdminPanel)}>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-primary">Create New Post</h2>
                {showAdminPanel ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
            </div>
            
            <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl transition-all duration-300 overflow-hidden mt-1 ${
              showAdminPanel ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Content</label>
                    <textarea
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent h-32"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Publish Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts */}
        <div className="max-w-3xl mx-auto space-y-8">
          {posts.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              No updates yet. Check back soon!
            </div>
          ) : (
            posts.map(post => (
              <article 
                key={post.id}
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                {isAdmin && (
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
                <h2 className="text-2xl font-bold text-primary mb-2">{post.title}</h2>
                <time className="text-sm text-gray-500 mb-4 block">{post.date}</time>
                <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
              </article>
            ))
          )}
        </div>

        {/* Admin Status Indicator */}
        {isAdmin && (
          <div className="fixed bottom-4 left-4 text-sm text-gray-600 italic bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
            <span>Currently logged in as an Admin</span>
            <LogOut className="w-4 h-4 text-gray-500" />
            <button 
              onClick={() => setIsAdmin(false)}
              className="text-gray-500 hover:text-gray-700 underline"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
