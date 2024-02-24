"use client";


export const Logos = () => {
    const companies = [
        {
            name: "Company 1",
            imagePath: "your-image-path-1.jpg",
        },
        {
            name: "Company 2",
            imagePath: "your-image-path-2.jpg",
        },
        {
            name: "Company 3",
            imagePath: "your-image-path-3.jpg",
        },
        {
            name: "Company 4",
            imagePath: "your-image-path-3.jpg",
        },
        {
            name: "Company 5",
            imagePath: "your-image-path-3.jpg",
        },
        // Add similar objects for other companies
    ];
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
                    Whom we are Working with
                </h2>
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    {companies.map((company) => (
                        <a key={company.name} href="#" className="flex justify-center items-center">
                            <img
                                src={company.imagePath}
                                alt={company.name}
                                className="h-9 hover:text-gray-900 dark:hover:text-white"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
