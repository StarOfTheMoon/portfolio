# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-05-30 09:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_project_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='level',
            field=models.PositiveSmallIntegerField(default=0, verbose_name='Pourcentage'),
        ),
    ]
