export interface Project {
    title: string;
    tech: string[];
    features: string[];
    status: 'Completed' | 'In Progress';
    github: string;
    demo?: string;
}
