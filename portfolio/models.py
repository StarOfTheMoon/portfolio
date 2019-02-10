# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.template.defaultfilters import slugify
from django.utils.translation import ugettext_lazy as _


class Image(models.Model):
	TYPES = (
		("S","Slider"),
		("H","Home")
	)
	image = models.ImageField()
	type = models.CharField("Type", max_length=1, choices=TYPES, default="S")

	class Meta :
		abstract = True

class Image(Image):
	project_id = models.ForeignKey("Project", related_name="image", null=True)

	class Meta :
		verbose_name = "Image"

	def __str__(self):
		return str(self.image)

class Tag(models.Model):
	name = models.CharField("Nom",max_length=100)
	level = models.PositiveSmallIntegerField("Pourcentage", default=0)
	type = models.CharField("Catégorie",max_length=100, default="")
	slug = models.SlugField(default=None, null=True, blank=True)

	def __str__(self):
		return (self.name)

	@property
	def tagname(self):
		return "%s " % (self.name)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.name)
		super(Tag, self).save(*args, **kwargs)

	class Meta :
		verbose_name = "Tag"
	
class Project(models.Model):
	title = models.CharField("titre",max_length=250)
	subtitle = models.CharField("sous titre", max_length=250, null=True, blank=True)
	description = models.TextField(max_length=450)
	tags = models.ManyToManyField(Tag, blank=True)
	link = models.URLField("lien", blank=True)
	slug = models.SlugField(default=None, null=True, blank=True)

	def __str__(self):
		return (self.title)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Project, self).save(*args, **kwargs)

	class Meta :
		verbose_name = "Projet"