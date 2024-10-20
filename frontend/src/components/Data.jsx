export const posts = [
    {
        id: 1,
        title: 'First Blog Post',
        excerpt: 'Today was a good day! I started to learn a new technology called Deno 2...',
        content: (
            <>
                <div className="mb-4">
                    Today was a good day. I began learning a new technology called{' '}
                    <a
                        href="https://deno.com/blog/v2.0"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Deno 2
                    </a>, which I’m using to build a server that stores and distributes media directly from my phone.
                </div>
                <div className="mb-4">
                    This project will demonstrate my skills to potential clients who want the ability to easily update their websites—whether it’s changing content, uploading images, or adding new features—without needing to call a developer every time.
                </div>
                <div className="mb-4">
                    My goal is to offer clients the power to manage their online presence independently, in the same way they might update their social media.
                </div>
            </>
        ),
        timestamp: new Date().toLocaleString(), // Add a timestamp here
    },
    // Add more blog posts here...
];
