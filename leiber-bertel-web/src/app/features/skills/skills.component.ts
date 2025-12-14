import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export interface SkillItem {
  name: string;
  level: string;
  barClass: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills section" id="skills">
      <h2 class="section__title">Habilidades</h2>
      <span class="section__subtitle">Mi nivel técnico</span>

      <div class="skills__container container grid">
        <div *ngFor="let category of categories; let i = index">
          <div
            class="skills__content"
            [class.skills__open]="openIds.has(category.id)"
            [class.skills__close]="!openIds.has(category.id)"
          >
            <div class="skills__header" (click)="toggle(category.id)">
              <i class="{{ category.icon }} skills__icon"></i>

              <div>
                <h1 class="skills__title">{{ category.title }}</h1>
                <span class="skills__subtitle">{{ category.subtitle }}</span>
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>
            <div class="skills__list grid">
              <div class="skills__data" *ngFor="let skill of category.skills">
                <div class="skills__titles">
                  <h3 class="skills__name">{{ skill.name }}</h3>
                  <span class="skills__number">{{ skill.level }}</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage" [ngClass]="skill.barClass"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent implements OnInit {
  @Input() categories: SkillCategory[] = [];
  @Input() defaultOpenId?: string;

  openIds = new Set<string>();

  ngOnInit() {
    const initial = this.defaultOpenId || this.categories[0]?.id;
    if (initial) {
      this.openIds.add(initial);
    }
  }

  toggle(id: string) {
    this.openIds = new Set(this.openIds.has(id) ? [] : [id]);
  }
}
