/* Material Modules */
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

/* Material CDK Modules */
import { DragDropModule } from '@angular/cdk/drag-drop';

export const ANGULAR_MATERIAL_MODULES: any[] = [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
]

export const ANGULAR_CDK_MODULES: any[] = [
    DragDropModule
]