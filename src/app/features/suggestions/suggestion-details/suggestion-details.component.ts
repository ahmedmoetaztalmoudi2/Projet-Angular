import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion: Suggestion | null = null;
  
  // All suggestions data (same as in list component)
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description:
        "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      likes: 0,
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description:
        'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      likes: 0,
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description:
        "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      likes: 0,
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur",
      description:
        "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
      category: 'Technologie',
      date: new Date('2025-02-05'),
      status: 'en_attente',
      likes: 0,
    },
    {
      id: 5,
      title: 'Augmenter les avantages sociaux',
      description:
        "Proposition d'augmentation des avantages sociaux pour améliorer la qualité de vie au travail.",
      category: 'Ressources Humaines',
      date: new Date('2025-02-10'),
      status: 'en_attente',
      likes: 0,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the ID from route parameters
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convert to number
      this.suggestion = this.suggestions.find(s => s.id === id) || null;
    });
  }

  goBack(): void {
    this.router.navigate(['/suggestions']);
  }
}
