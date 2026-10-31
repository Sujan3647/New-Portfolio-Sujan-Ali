import { PORTFOLIO_DATA, Project, TechItem } from '../data/portfolioData';

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const trimmedName = data.name ? data.name.trim() : '';
  if (!trimmedName) {
    errors.name = 'Name is required.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = data.email ? data.email.trim() : '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Email address is required.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email address.';
  }

  const trimmedMessage = data.message ? data.message.trim() : '';
  if (!trimmedMessage) {
    errors.message = 'Message cannot be empty.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function filterTechStack(
  items: TechItem[],
  selectedCategory: string,
  searchQuery: string = ''
): TechItem[] {
  const query = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'ALL' || item.category.toUpperCase() === selectedCategory.toUpperCase();
    const matchesQuery =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.context.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });
}

export function filterProjects(
  projects: Project[],
  selectedCategory: string = 'ALL',
  searchQuery: string = ''
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'ALL' ||
      project.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase() === selectedCategory.toLowerCase());

    const matchesQuery =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techStack.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });
}

export interface SearchResultItem {
  id: string;
  type: 'project' | 'tech' | 'achievement' | 'experience' | 'section';
  title: string;
  subtitle: string;
  anchor: string;
}

export function searchAllPortfolio(query: string): SearchResultItem[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return [];

  const results: SearchResultItem[] = [];

  // Search Projects
  for (const project of PORTFOLIO_DATA.projects) {
    if (
      project.title.toLowerCase().includes(clean) ||
      project.tagline.toLowerCase().includes(clean) ||
      project.description.toLowerCase().includes(clean) ||
      project.techStack.some((t) => t.toLowerCase().includes(clean))
    ) {
      results.push({
        id: `proj-${project.id}`,
        type: 'project',
        title: `${project.number}. ${project.title}`,
        subtitle: project.tagline,
        anchor: '#projects',
      });
    }
  }

  // Search Skills / Tech Stack
  for (const tech of PORTFOLIO_DATA.techStack) {
    if (
      tech.name.toLowerCase().includes(clean) ||
      tech.category.toLowerCase().includes(clean) ||
      tech.context.toLowerCase().includes(clean)
    ) {
      results.push({
        id: `tech-${tech.name}`,
        type: 'tech',
        title: tech.name,
        subtitle: `${tech.category} · ${tech.context}`,
        anchor: '#skills',
      });
    }
  }

  // Search Achievements
  for (const ach of PORTFOLIO_DATA.achievements) {
    if (
      ach.title.toLowerCase().includes(clean) ||
      ach.headlineNumber.toLowerCase().includes(clean) ||
      ach.description.toLowerCase().includes(clean)
    ) {
      results.push({
        id: `ach-${ach.id}`,
        type: 'achievement',
        title: `${ach.headlineNumber} — ${ach.title}`,
        subtitle: ach.organization,
        anchor: '#achievements',
      });
    }
  }

  // Search Experience
  for (const exp of PORTFOLIO_DATA.experience) {
    if (
      exp.organization.toLowerCase().includes(clean) ||
      exp.role.toLowerCase().includes(clean) ||
      exp.highlights.some((h) => h.toLowerCase().includes(clean))
    ) {
      results.push({
        id: `exp-${exp.id}`,
        type: 'experience',
        title: `${exp.role} @ ${exp.organization}`,
        subtitle: exp.period,
        anchor: '#experience',
      });
    }
  }

  return results.slice(0, 8);
}

export function generateVCardString(profile: typeof PORTFOLIO_DATA.profile): string {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${profile.name}`,
    `N:Ali;Sujan;;;`,
    `TITLE:Full Stack Developer & Technology Consultant`,
    `EMAIL;TYPE=INTERNET,PREF:${profile.email}`,
    `TEL;TYPE=CELL:${profile.phone || '+91 8798634773'}`,
    `URL:${profile.github}`,
    `ADR;TYPE=WORK:;;Tripura;India;;;`,
    `NOTE:${profile.supportingDescription}`,
    'END:VCARD'
  ].join('\r\n');
}
