# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-11-04 00:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_auto_20170816_2126'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='slug',
            field=models.SlugField(blank=True, default=None, null=True),
        ),
    ]
